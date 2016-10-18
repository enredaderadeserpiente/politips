from django.contrib.auth.models import User

from politips_api.models import Legislator
from politips_api.serializers import LegislatorSerializer, UserSerializer, AgendaSerializer
from rest_framework import viewsets


class LegislatorViewSet(viewsets.ModelViewSet):
    queryset = Legislator.objects.all()
    serializer_class = LegislatorSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AgendaViewSet(viewsets.ModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
