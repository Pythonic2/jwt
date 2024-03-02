import requests

payload = {"username": "teste", "password": "1234"}
response = requests.post('http://127.0.0.1:8000/api/token/', data=payload)
data = response.json()

headers = {'Authorization': f'Bearer {data['access']}'}

url = f"http://127.0.0.1:8000/livros/"
# Agora você pode acessar o token assim:
teste = requests.get(url, headers=headers).json()

print(teste)
