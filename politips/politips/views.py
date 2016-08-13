from django.contrib.auth.models import User

from politips.models import Legislator
from politips.serializers import LegislatorSerializer, UserSerializer
from rest_framework import viewsets


class LegislatorViewSet(viewsets.ModelViewSet):
    queryset = Legislator.objects.all()
    serializer_class = LegislatorSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
