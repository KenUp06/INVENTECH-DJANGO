# inventory/views.py
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm  # Asegúrate de tener esta línea

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  # Redirige a una página de inicio después del registro
    else:
        form = CustomUserCreationForm()
    return render(request, 'inventory/register.html', {'form': form})


def login(request):
    return render(request, 'inventory/login.html')

def about(request):
    return render(request, 'inventory/about.html')

def contactus(request):
    return render(request, 'inventory/contactus.html')

def inventary(request):
    return render(request, 'inventory/inventary.html')

def inventarygestion(request):
    return render(request, 'inventory/inventarygestion.html')

def userprofile(request):
    return render(request, 'inventory/userprofile.html')

def workarea(request):
    return render(request, 'inventory/workarea.html')

