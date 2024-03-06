from django.contrib.auth.models import User, Group
from api.models import Lista, Item
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class GroupItem(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id','url', 'nome','finalizado']

class GroupLista(serializers.HyperlinkedModelSerializer):
    item_set = GroupItem(many=True)

    class Meta:
        model = Lista
        fields = ['id','url','nome','item_set']