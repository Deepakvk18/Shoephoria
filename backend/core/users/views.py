# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
# from allauth.socialaccount.providers.oauth2.client import OAuth2Client
# from dj_rest_auth.registration.views import SocialLoginView
# from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import *

# Create your views here.
# class GoogleLogin(SocialLoginView):
#     """"""
#     adapter_class = GoogleOAuth2Adapter
#     client_class = OAuth2Client
#     callback_url = 'http://localhost:3000/accounts/google/login/callback/'
#
# class FacebookLogin(SocialLoginView):
#     """"""
#     adapter_class = FacebookOAuth2Adapter
#     client_class = OAuth2Client
#     callback_url = 'http://localhost:3000/accounts/facebook/login/callback/'

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


