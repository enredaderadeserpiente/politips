from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from politips.models import Legislature, Legislator, Legislatorship, State, District, Agenda, AgendaItem, Vote
import datetime

class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser("karabijavad@gmail.com", "karabijavad@gmail.com", "password")
        User.objects.create_superuser("michael.kanin@austinmonitor.com", "michael.kanin@austinmonitor.com", "password")

        Steve_Adler = Legislator.objects.create(name='Steve Adler')
        Ora_Houston = Legislator.objects.create(name='Ora Houston')
        Delia_Garza = Legislator.objects.create(name='Delia Garza')
        Sabino_Renteria = Legislator.objects.create(name='Sabino Renteria')
        Gregorio_Casar = Legislator.objects.create(name='Gregorio Casar')
        Ann_Kitchen = Legislator.objects.create(name='Ann Kitchen')
        Don_Zimmerman = Legislator.objects.create(name='Don Zimmerman')
        Leslie_Pool = Legislator.objects.create(name='Leslie Pool')
        Ellen_Troxclair = Legislator.objects.create(name='Ellen Troxclair')
        Kathie_Tovo = Legislator.objects.create(name='Kathie Tovo')
        Sheri_Gallo = Legislator.objects.create(name='Sheri Gallo')

        texas = State.objects.create(name="Texas")
        texas_district_1  = texas.districts.create(name="District 1", state=texas)
        texas_district_2  = texas.districts.create(name="District 2", state=texas)
        texas_district_3  = texas.districts.create(name="District 3", state=texas)
        texas_district_4  = texas.districts.create(name="District 4", state=texas)
        texas_district_5  = texas.districts.create(name="District 5", state=texas)
        texas_district_6  = texas.districts.create(name="District 6", state=texas)
        texas_district_7  = texas.districts.create(name="District 7", state=texas)
        texas_district_8  = texas.districts.create(name="District 8", state=texas)
        texas_district_9  = texas.districts.create(name="District 9", state=texas)
        texas_district_10 = texas.districts.create(name="District 10", state=texas)

        acc_2015 = Legislature.objects.create(name='Austin City Council 2015')
        acc_2015.add_legislator(Steve_Adler)
        acc_2015.add_legislator(Ora_Houston, district=texas_district_1)
        acc_2015.add_legislator(Delia_Garza,  district=texas_district_2)
        acc_2015.add_legislator(Sabino_Renteria, district=texas_district_3)
        acc_2015.add_legislator(Gregorio_Casar, district=texas_district_4)
        acc_2015.add_legislator(Ann_Kitchen, district=texas_district_5)
        acc_2015.add_legislator(Don_Zimmerman, district=texas_district_6)
        acc_2015.add_legislator(Leslie_Pool, district=texas_district_7)
        acc_2015.add_legislator(Ellen_Troxclair, district=texas_district_8)
        acc_2015.add_legislator(Kathie_Tovo, district=texas_district_9)
        acc_2015.add_legislator(Sheri_Gallo, district=texas_district_10)

        acc_2016 = Legislature.objects.create(name='Austin City Council 2016')
        acc_2016_Steve_Adler      = acc_2016.add_legislator(Steve_Adler)
        acc_2016_Ora_Houston      = acc_2016.add_legislator(Ora_Houston, district=texas_district_1)
        acc_2016_Delia_Garza      = acc_2016.add_legislator(Delia_Garza, district=texas_district_2)
        acc_2016_Sabino_Renteria  = acc_2016.add_legislator(Sabino_Renteria, district=texas_district_3)
        acc_2016_Gregorio_Casar   = acc_2016.add_legislator(Gregorio_Casar, district=texas_district_4)
        acc_2016_Ann_Kitchen      = acc_2016.add_legislator(Ann_Kitchen, district=texas_district_5)
        acc_2016_Don_Zimmerman    = acc_2016.add_legislator(Don_Zimmerman, district=texas_district_6)
        acc_2016_Leslie_Pool      = acc_2016.add_legislator(Leslie_Pool, district=texas_district_7)
        acc_2016_Ellen_Troxclair  = acc_2016.add_legislator(Ellen_Troxclair, district=texas_district_8)
        acc_2016_Kathie_Tovo      = acc_2016.add_legislator(Kathie_Tovo, district=texas_district_9)
        acc_2016_Sheri_Gallo      = acc_2016.add_legislator(Sheri_Gallo, district=texas_district_10)

        agenda1 = Agenda.objects.create(name='6/16/2016')
        agenda_item23 = agenda1.agenda_items.create(
            item_number='23',
            description='Effort by CM Casar to, as he put it, align driving rules with city Fair Chance hiring'
        )
        acc_2016_Steve_Adler.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Ora_Houston.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Delia_Garza.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Sabino_Renteria.votes.create(agenda_item=agenda_item23, decision="Yea")
        acc_2016_Gregorio_Casar.votes.create(agenda_item=agenda_item23, decision="Yea")
        acc_2016_Ann_Kitchen.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Don_Zimmerman.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Leslie_Pool.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Ellen_Troxclair.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Kathie_Tovo.votes.create(agenda_item=agenda_item23, decision="Nay")
        acc_2016_Sheri_Gallo.votes.create(agenda_item=agenda_item23, decision="Nay")

        agenda2 = Agenda.objects.create(name='6/9/2016')
        agenda_item5 = agenda1.agenda_items.create(
            item_number='5',
            description='Authorize negotiation and execution of a professional services agreement with KIMLEY-HORN AND ASSOCIATES, INC. (staff recommendation), or one of the other qualified responders for Request for Qualifications Solicitation No. CLMP195 to provide engineering services for the City Street Impact Fee project for a contract amount not to exceed $1,175,000.'
        )
        acc_2016_Steve_Adler.votes.create(agenda_item=agenda_item5, decision="Off Dais")
        acc_2016_Ora_Houston.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Delia_Garza.votes.create(agenda_item=agenda_item5, decision="Off Dais")
        acc_2016_Sabino_Renteria.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Gregorio_Casar.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Ann_Kitchen.votes.create(agenda_item=agenda_item5, decision="Off Dais")
        acc_2016_Don_Zimmerman.votes.create(agenda_item=agenda_item5, decision="Nay")
        acc_2016_Leslie_Pool.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Ellen_Troxclair.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Kathie_Tovo.votes.create(agenda_item=agenda_item5, decision="Yea")
        acc_2016_Sheri_Gallo.votes.create(agenda_item=agenda_item5, decision="Abstain")
