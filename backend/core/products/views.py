import logging

from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.routers import DefaultRouter


# Create your views here.

from .serializers import *

logger = logging.getLogger('log')

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    depth = 2

    def create(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        product = Product.objects.get(id=pk)
        if not product:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer.update(instance=product, validated_data=serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TypeViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

    def create(self, request, *args, **kwargs):
        serializer = TypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        serializer = TypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubTypeViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = SubType.objects.all()
    serializer_class = SubTypeSerializer

class SizeViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class MaterialViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class ColorViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class VariantViewSet(viewsets.ModelViewSet):

    queryset = Variant.objects.all()
    serializer_class = VariantSerializer
    depth = 2

class LocationViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class ProductInventoryViewSet(viewsets.ModelViewSet):

    queryset = ProductInventory.objects.all()
    serializer_class = ProductInventorySerializer
    depth = 2

class UsageViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = Usage.objects.all()
    serializer_class = UsageSerializer


products_router = DefaultRouter()
products_router.register('products', ProductViewSet)
products_router.register('types', TypeViewSet)
products_router.register('subtypes', SubTypeViewSet)
products_router.register('sizes', SizeViewSet)
products_router.register('materials', MaterialViewSet)
products_router.register('colors', ColorViewSet)
products_router.register('variants', VariantViewSet)
products_router.register('locations', LocationViewSet)
products_router.register('productinventory', ProductInventoryViewSet)
products_router.register('usage', UsageViewSet)