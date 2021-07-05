from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('battle/<str:who>/', views.battle, name='battle')
]