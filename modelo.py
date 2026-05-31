from sqlalchemy import Column, Integer, String, Boolean, Enum, Date, Time, Numeric, JSON
from banco import Base
import enum

class CategoriaEnum(str, enum.Enum):
    acao      = "Acao"
    aventura  = "Aventura"
    rpg       = "RPG"
    estategia = "Estrategia"

class PlataformaEnum(str, enum.Enum):
    pc   = "PC"
    play = "Playstation"
    xbox = "XBOX"

class Jogos(Base):
    __tablename__ = "jogos"
    id            = Column(Integer, primary_key=True, index=True)
    nome          = Column(String(60), nullable=False)
    desc          = Column(String(500), nullable=False)
    img           = Column(String(100), nullable=False)
    categoria     = Column(JSON, nullable=False)
    plataforma    = Column(JSON, nullable=False)
    preco         = Column(Numeric(10, 2), nullable=False)
    precod        = Column(Numeric(10, 2), nullable=False)
    desconto      = Column(Numeric(10, 2), nullable=False)

class Users(Base):
    __tablename__ = "users"
    id            = Column(Integer, primary_key=True, index=True)
    email         = Column(String(60), nullable=False)
    senha         = Column(String(30), nullable=False)
    created_at    = Column(Date, nullable=False)

class Perfil(Base):
    __tablename__ = "perfil"
    id            = Column(Integer, primary_key=True, index=True)
    username      = Column(String(60), nullable=False)
    email         = Column(String(60), nullable=False)
    created_at    = Column(Date, nullable=False)
