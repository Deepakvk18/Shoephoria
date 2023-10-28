from rest_framework import serializers

from .models import *



class TypeSerializer(serializers.ModelSerializer):

        class Meta:
            model = Type
            fields = '__all__'

        def create(self, validated_data):
            return Type.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.name = validated_data.get('name', instance.name)
            instance.save()
            return instance

class UsageSerializer(serializers.ModelSerializer):

        class Meta:
            model = Usage
            fields = '__all__'

        def create(self, validated_data):
            return Usage.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.name = validated_data.get('name', instance.name)
            instance.save()
            return instance

class SubTypeSerializer(serializers.ModelSerializer):

        class Meta:
            model = SubType
            fields = '__all__'

        def create(self, validated_data):
            return SubType.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.name = validated_data.get('name', instance.name)
            instance.type = validated_data.get('type', instance.type)
            instance.save()
            return instance

class SizeSerializer(serializers.ModelSerializer):

        class Meta:
            model = Size
            fields = '__all__'

        def create(self, validated_data):
            return Size.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.size_cms = validated_data.get('size_cms', instance.size_cms)
            instance.size_inches = validated_data.get('size_inches', instance.size_inches)
            instance.UK = validated_data.get('UK', instance.UK)
            instance.US = validated_data.get('US', instance.US)
            instance.save()
            return instance

class MaterialSerializer(serializers.ModelSerializer):

        class Meta:
            model = Material
            fields = '__all__'

        def create(self, validated_data):
            return Material.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.name = validated_data.get('name', instance.name)
            instance.save()
            return instance

class VariantSerializer(serializers.ModelSerializer):

        class Meta:
            model = Variant
            fields = '__all__'

        def create(self, validated_data):
            return Variant.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.product = validated_data.get('product', instance.product)
            instance.size = validated_data.get('size', instance.size)
            instance.material = validated_data.get('material', instance.material)
            instance.save()
            return instance

class LocationSerializer(serializers.ModelSerializer):

        class Meta:
            model = Location
            fields = '__all__'

        def create(self, validated_data):
            return Location.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.name = validated_data.get('name', instance.name)
            instance.save()
            return instance

class ColorSerializer(serializers.ModelSerializer):

        class Meta:
            model = Color
            fields = '__all__'

        def create(self, validated_data):
            return Color.objects.create(**validated_data)

        def update(self, instance, validated_data):
            print(instance)
            instance.name = validated_data.get('name', instance.name)
            instance.hexcode = validated_data.get('hexcode', instance.hexcode)
            instance.save()
            return instance

class ProductSerializer(serializers.ModelSerializer):

    type = TypeSerializer(read_only=True)
    usage = UsageSerializer(read_only=True)
    subtype = SubTypeSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.usage = validated_data.get('usage', instance.usage)
        instance.subtype = validated_data.get('subtype', instance.type)
        instance.description = validated_data.get('description', instance.description)
        instance.short_description = validated_data.get('short_description', instance.short_description)
        instance.features = validated_data.get('features', instance.features)
        instance.save()
        return instance

class ProductInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInventory
        fields = '__all__'

    def create(self, validated_data):
        return ProductInventory.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.variant = validated_data.get('variant', instance.variant)
        instance.location = validated_data.get('location', instance.location)
        instance.in_stock = validated_data.get('in_stock', instance.in_stock)
        instance.restock_date = validated_data.get('restock_date', instance.restock_date)
        instance.sold_qty = validated_data.get('sold_qty', instance.sold_qty)
        instance.last_restock_date = validated_data.get('last_restock_date', instance.last_restock_date)
        instance.sold_since_last_restock = validated_data.get('sold_since_last_restock',
                                                              instance.sold_since_last_restock)
        instance.actual_price = validated_data.get('actual_price', instance.actual_price)
        instance.discounted_price = validated_data.get('discounted_price', instance.discounted_price)
        instance.save()
        return instance