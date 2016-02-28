from gcm import GCM
from datetime import datetime
now = datetime.now()
dataHJ=str(now.day).zfill(2) +'/'+str(now.month).zfill(2) +'/'+str(now.year) + \
       ' (' + str(now.hour).zfill(2) + ':' + str(now.minute).zfill(2) + ':' + str(now.second).zfill(2) + ')'

# Substitua a string abaixo com o RegID recebido pelo email.
TAKAI ='dQo2OxusWD0:APA91bHwNCwxPGDX04QlKqvEoGfp9adqTwtbYhEnoN_9ARti4fgnzGhnqvfUdVm-LlEKCO3H-CMFpgraXR3Q_eT4Y4HbytfMYNpREI1zRQb6ag0S_O1VHenkaCTRlbd12fLuvOpbNRoP'
BETE = 'dH3sPvk8IVo:APA91bFr6zrNf0f4vzpuuuDHDbb0lAt9rziU_7NgBLfDHdr2wjVmO2XT1s677cm3L7H-bq4KhgNYU07FsF2ro3nosffrhjkVtv-BpOFhoKjTqcXju5FjJIJ-QmNryv9juQQadkmPh0rk'

REGID = TAKAI
NOME = 'TAKAI'

APIID = 'AIzaSyBXtVkZuBRiexy0mnwuSqH-eO6lguuGVYo'
gcm = GCM(APIID)
reg_ids = [REGID]
dados = {
	'message': 'Ola ' + NOME, 
	'title': 'Push notification enviado pelo TAKAI em ' + dataHJ + '!'}

response = gcm.json_request(registration_ids=reg_ids, data=dados)
print (NOME)
print (response) 

'''
# Alternativamente para enviar uma mensagem plana
gcm.plaintext_request(registration_id=reg_ids, data=dados)

# Alternativamento com Extra arguments
res = gcm.json_request(
    registration_ids=reg_ids, data=dados,
    collapse_key='uptoyou', delay_while_idle=True, time_to_live=3600
)
print (res)'''