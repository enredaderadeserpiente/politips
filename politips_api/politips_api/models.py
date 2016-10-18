from django.db import models
from neo4j.v1 import GraphDatabase, basic_auth

Driver = GraphDatabase.driver('bolt://localhost', auth=basic_auth('neo4j', 'password'))

class Legislature(models.Model):
    name = models.CharField(max_length=255)

    def add_legislator(self, legislator, **kwargs):
        return self.legislatorships.create(legislator=legislator, **kwargs)

    def __str__(self):
        return self.name

class Legislatorship(models.Model):
    legislator  = models.ForeignKey('politips_api.Legislator', related_name='legislatorships')
    legislature = models.ForeignKey('politips_api.Legislature', related_name='legislatorships')
    district    = models.ForeignKey('politips_api.District', null=True)
    begin       = models.DateTimeField(null=True)
    end         = models.DateTimeField(null=True)

    def __str__(self):
        return "{} - {} - {} -> {}".format(self.legislator.name, self.legislature.name, self.begin, self.end)

class Legislator(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class State(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class District(models.Model):
    state = models.ForeignKey('politips_api.State', related_name='districts')
    name = models.CharField(max_length=255)

    def __str__(self):
        return "{}, {}".format(self.state.name, self.name)

class Agenda(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return "Agenda - {}".format(self.name)

class AgendaItem(models.Model):
    item_number = models.CharField(max_length=255, null=True)
    name = models.CharField(max_length=255)
    agenda = models.ForeignKey('politips_api.Agenda', related_name='agenda_items')
    description = models.TextField(max_length=255)

    def __str__(self):
        return "{} - {}".format(self.agenda.name, self.item_number)

class Vote(models.Model):
    decision = models.CharField(max_length=255, choices=[
        ["Yea", "Yea"],
        ["Nay", "Nay"],
        ["Abstain", "Abstain"],
        ["Off dais", "Off dais"],
    ])
    agenda_item = models.ForeignKey('politips_api.AgendaItem', related_name='votes')
    legislatorship = models.ForeignKey('politips_api.Legislatorship', related_name='votes')

    def __str__(self):
        return "{} - {} - {} - {}".format(
            self.legislatorship.legislator.name,
            self.agenda_item.agenda.name,
            self.agenda_item.item_number,
            self.decision,
        )
