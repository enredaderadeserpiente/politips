from django.contrib import admin

from politips.models import Legislator, Legislature, Legislatorship, State, District, Agenda, AgendaItem, Vote


class VoteInline(admin.TabularInline):
    model = Vote

class LegislatorShipInline(admin.TabularInline):
    model = Legislatorship

@admin.register(Legislator)
class LegislatorAdmin(admin.ModelAdmin):
    inlines = [
        LegislatorShipInline,
    ]

@admin.register(Legislature)
class LegislatureAdmin(admin.ModelAdmin):
    pass

@admin.register(Legislatorship)
class LegislatorshipAdmin(admin.ModelAdmin):
    inlines = [
        VoteInline,
    ]

@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass

@admin.register(District)
class DistrictAdmin(admin.ModelAdmin):
    pass

@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin):
    pass

@admin.register(AgendaItem)
class AgendaItemAdmin(admin.ModelAdmin):
    inlines = [
        VoteInline,
    ]

@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    pass
