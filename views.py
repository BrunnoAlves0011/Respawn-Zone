# views.py
from django.shortcuts import render
from .models import Banner

def home(request):
    banners = Banner.objects.all()
    return render(request, "home.html", {"banners": banners})