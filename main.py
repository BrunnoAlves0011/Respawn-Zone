from fastapi import FastAPI, HTTPException, Depends, Request, Form, UploadFile, File
from fastapi.responses import RedirectResponse, HTMLResponse, StreamingResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from banco import SessionLocal, engine
from modelo import Jogos, Users, Perfil, Base
from fastapi.staticfiles import StaticFiles
import uvicorn
from starlette.middleware.sessions import SessionMiddleware
from datetime import datetime, timedelta, time
import locale

import json
import zipfile
import io
from functools import wraps
import requests

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="supersecretkey")

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

try:
    locale.setlocale(locale.LC_TIME, "pt_BR.UTF-8")
except:
    locale.setlocale(locale.LC_TIME, "Portuguese_Brazil.1252")

# Abre o banco de dados para utilização
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Tela Inicial
# @app.get("/", response_class=HTMLResponse)
# def home(request: Request):
#     print(request.session.get("logged_in"))
#     if request.session.get("logged_in"):
#         return templates.TemplateResponse("signin.html", {"request": request}, Form=Form)
#     else:
#         return templates.TemplateResponse("home.html", {"request": request})



# Tela Principal (HomePage)
@app.get("/home", response_class=HTMLResponse)
def homePage(request: Request, db: Session = Depends(get_db)):
    if request.session.get("logged_in"):
        jogos = db.query(Jogos).all()

        return templates.TemplateResponse("home.html", {"request": request, "jogos": jogos})
    else:
        return templates.TemplateResponse("signin.html", {"request": request})



# Tela Adicionar Jogo
@app.get("/add_jogo", response_class=HTMLResponse)
def addJogoPage(request: Request, db: Session = Depends(get_db)):
    return templates.TemplateResponse("add_jogo.html", {"request": request})

@app.post("/salvar-jogo", response_class=HTMLResponse)
def addJogo(request: Request, 
            db: Session = Depends(get_db),
            nome: str = Form(...), 
            desc: str = Form(...), 
            img: str = Form(...), 
            categoria: list[str] = Form(...), 
            plataforma: list[str] = Form(...),
            preco: str = Form(...),
            desconto: str = Form(...)):
    
    if desconto > 0:
        valor_final = preco - (preco * (desconto / 100))
        precod = round(valor_final, 2)
    else:
        precod = preco

    novo_jogo = Jogos(
        nome=nome,
        desc=desc,
        img=img,
        categoria=categoria,
        plataforma=plataforma,
        preco=preco,
        precod=precod,
        desconto=desconto
    )

    db.add(novo_jogo)
    db.commit()
    return RedirectResponse(url="/", status_code=303)



# Tela Login
# @app.get("/login", response_class=HTMLResponse)
# def login(request: Request, error: str = None, success: str = None):
#     error_msg = None
#     success_msg = None
    
#     if error == "error_login":
#         error_msg = "Erro ao entrar na conta!"

#     return templates.TemplateResponse("signin.html", {
#         "request": request,
#         "error": error_msg,
#         "success": success_msg
#         })

# @app.post("/login", response_class=HTMLResponse)
# def validar(request: Request, usuario: str = Form(...), senha: str = Form(...), db: Session = Depends(get_db)):
#     user = db.query(Users).filter_by(username=usuario, senha=senha).first()
#     if user:
#         print('Logado com sucesso')
#         perfil = db.query(Perfil).filter_by(username = user.username).first()
#         request.session["logged_in"] = True
#         request.session["username"] = user.username
#         request.session["user"] = perfil.nome
#         return RedirectResponse(url='/home', status_code=303)
#     else:
#         print('Erro ao entrar')
#         return RedirectResponse(url="/login?error=error_login", status_code=303)



# Tela Cadastro
# @app.get("/cadastro", response_class=HTMLResponse)
# def cadastro(request: Request, error: str = None, success: str = None):

#     error_msg = None
#     success_msg = None
    
#     if error == "user_existed":
#         error_msg = "Usuario já existe!"
    
#     if success == "created":
#         success_msg = "Conta criada com sucesso!"

#     return templates.TemplateResponse("signup.html", {
#         "request": request,
#         "error": error_msg,
#         "success": success_msg
#         })

# @app.post("/cadastro", response_class=HTMLResponse)
# def validar(request: Request, name: str = Form(...), usuario: str = Form(...), email: str = Form(...), senha: str = Form(...), db: Session = Depends(get_db)):
#     user_existed = db.query(Users).filter(Users.username == usuario).first()
#     profile_existed = db.query(Perfil).filter(Perfil.username == usuario).first()

#     data = datetime.now().strftime("%Y-%m-%d")
#     data_obj = datetime.strptime(data, "%Y-%m-%d").date()

#     if not user_existed and not profile_existed:
#         novo_usuario = Users(username=usuario, senha=senha)
#         novo_perfil = Perfil(nome=name, username=usuario, email=email, created_at=data_obj)
#         db.add(novo_usuario)
#         db.add(novo_perfil)
#         db.commit()
#         return RedirectResponse(url="/login", status_code=303)
#     else:
#         return RedirectResponse(url="/cadastro?error=user_existed", status_code=303)
    


# Ação Logout
# @app.get("/logout")
# def logout(request: Request):
#     request.session.clear()
#     return RedirectResponse(url="/", status_code=200)



# Ação Del Conta
# @app.delete("/perfil/excluir-conta/{user}")
# def deletar_conta(request: Request, user: str, db: Session = Depends(get_db)):
#     perfil = db.query(Perfil).filter_by(username=user).delete()

#     users = db.query(Users).filter_by(username=user).delete()

#     if not perfil:
#         raise HTTPException(status_code=404, detail="Perfil não encontrado")
    
#     tarefas = db.query(Tarefas).filter_by(user=user).delete()

#     db.commit()

#     logout()

#     return {"message": "Tarefa excluída com sucesso"}



if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
