# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
# from allauth.socialaccount.providers.oauth2.client import OAuth2Client
# from dj_rest_auth.registration.views import SocialLoginView
# from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_framework import viewsets, status
from .serializers import *

class CustomTokenObtainPairView(TokenObtainPairView):

    def post(self, request: Request, *args, **kwargs) -> Response:
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            access_token = response.data.get('access')
            refresh_token = response.data.get('refresh')

            response.set_cookie('access',
                                access_token,
                                max_age=settings.AUTH_COOKIE_MAX_AGE,
                                path=settings.AUTH_COOKIE_PATH,
                                secure=settings.AUTH_COOKIE_SECURE,
                                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                                samesite=settings.AUTH_COOKIE_SAME_SITE
                                )
            response.set_cookie('refresh',
                                refresh_token,
                                max_age=settings.AUTH_COOKIE_REFRESH_MAX_AGE,
                                path=settings.AUTH_COOKIE_PATH,
                                secure=settings.AUTH_COOKIE_SECURE,
                                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                                samesite=settings.AUTH_COOKIE_SAME_SITE
                                )
        return response

class CustomTokenRefreshView(TokenRefreshView):

    _serializer_class = None

    def post(self, request: Request, *args, **kwargs) -> Response:

        refresh_token = request.COOKIES.get('refresh')
        if refresh_token:
            request.data['refresh'] = refresh_token
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            access_token = response.data.get('access')
            refresh_token = response.data.get('refresh')

            response.set_cookie('access',
                                access_token,
                                max_age=settings.AUTH_COOKIE_MAX_AGE,
                                path=settings.AUTH_COOKIE_PATH,
                                secure=settings.AUTH_COOKIE_SECURE,
                                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                                samesite=settings.AUTH_COOKIE_SAME_SITE
                                )
            response.set_cookie('refresh',
                                refresh_token,
                                max_age=settings.AUTH_COOKIE_REFRESH_MAX_AGE,
                                path=settings.AUTH_COOKIE_PATH,
                                secure=settings.AUTH_COOKIE_SECURE,
                                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                                samesite=settings.AUTH_COOKIE_SAME_SITE
                                )
        return response


class CustomTokenVerifyView(TokenVerifyView):

    serializer_class = None

    def post(self, request: Request, *args, **kwargs) -> Response:

        access_token = request.COOKIES.get('access')
        if access_token:
            request.data['token'] = access_token

        return super().post(request, *args, **kwargs)

class LogoutView(APIView):

    def post(self, request, *args, **kwargs):
        response = Response(status=status.HTTP_204_NO_CONTENT)
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        return response


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 'phone_number', 'default_address']

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    class Meta:
        model = Address
        fields = '__all__'

class AddressTypeViewSet(viewsets.ModelViewSet):

    queryset = AddressType.objects.all()
    serializer_class = AddressTypeSerializer
    class Meta:
        model = AddressType
        fields = '__all__'

class CartViewSet(viewsets.ModelViewSet):

    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemsViewSet(viewsets.ModelViewSet):

    queryset = CartItems.objects.all()
    serializer_class = CartItemsSerializer
    class Meta:
        model = CartItems
        fields = '__all__'

class OrdersViewSet(viewsets.ModelViewSet):

    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    class Meta:
        model = Orders
        fields = '__all__'

class OrderItemsViewSet(viewsets.ModelViewSet):

    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    class Meta:
        model = OrderItems
        fields = '__all__'

class WishlistViewSet(viewsets.ModelViewSet):

    queryset = WishList.objects.all()
    serializer_class = WishlistSerializer
    class Meta:
        model = WishList
        fields = '__all__'


