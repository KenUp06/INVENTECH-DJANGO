from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Página de inicio
    path('login/', views.login, name='login'),  # Página de inicio de sesión
    path('register/', views.register, name='register'),
    path('about/', views.about, name='about'),  # Página de información
    path('contactus/', views.contactus, name='contactus'),  # Página de contacto
    path('inventary/', views.inventary, name='inventary'),  # Página de inventario
    path('inventarygestion/', views.inventarygestion, name='inventarygestion'),  # Página de gestión de inventario
    path('userprofile/', views.userprofile, name='userprofile'),  # Página de perfil de usuario
    path('workarea/', views.workarea, name='workarea'),  # Página de área de trabajo
]
