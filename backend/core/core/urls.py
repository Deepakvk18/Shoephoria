"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from products.views import products_router
from users.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('users.urls')),
    re_path(r'^auth/', include('djoser.social.urls')),
    path('address/', AddressViewSet.as_view({ 'get': 'list', 'get': 'retrieve', 'post': 'create', 'patch': 'update', 'delete': 'destroy' }), name='address'),
    path('address-type/', AddressTypeViewSet.as_view({ 'get': 'list'}), name='address-type'),
    path('cart-items/', CartItemsViewSet.as_view({ 'get': 'retrieve', 'post': 'create', 'delete': 'destroy' }), name='cart-items'),
    path('orders/', OrdersViewSet.as_view({ 'get': 'retrieve', 'post': 'create' }), name='orders'),
    path('order-items/', OrderItemsViewSet.as_view({ 'get': 'retrieve', 'post': 'create', 'delete': 'destroy' }), name='order-items'),
    path('wishlist/', WishlistViewSet.as_view({ 'get': 'retrieve', 'post': 'create', 'delete': 'destroy' }), name='wishlist'),
    # YOUR PATTERNS
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    path('products-', include(products_router.urls)),

]
