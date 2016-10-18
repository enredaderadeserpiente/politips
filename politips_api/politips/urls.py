from django.conf.urls import url, include
from django.contrib import admin
from django.core.urlresolvers import reverse_lazy
from django.views.generic.base import RedirectView
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from politips_api.views import LegislatorViewSet, UserViewSet, AgendaViewSet


router = routers.DefaultRouter()
router.register(r'legislators', LegislatorViewSet)
router.register(r'users', UserViewSet)
router.register(r'agendas', AgendaViewSet)

urlpatterns = [
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', RedirectView.as_view(url=reverse_lazy('admin:index'))),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api-token-auth/', obtain_jwt_token),
]
