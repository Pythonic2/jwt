from django.urls import include, path
from rest_framework import routers
from api.views import UserViewSet, GroupViewSet, ItemViewSet, ListaViewSet
from django.contrib import admin
from rest_framework.authtoken import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'items', ItemViewSet)
router.register(r'lista', ListaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token, name='api-token-auth'),
    path('admin/', admin.site.urls)
    

]
