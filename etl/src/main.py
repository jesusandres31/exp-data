import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Configura el acceso a la API de Google Sheets
scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive",
]

# Ruta al archivo de credenciales JSON
creds_path = (
    "ruta/a/tu/archivo/credenciales.json"  # Reemplaza esto con la ruta correcta
)

# Autenticar y obtener acceso
credentials = ServiceAccountCredentials.from_json_keyfile_name(creds_path, scope)
client = gspread.authorize(credentials)

# Abre el Google Sheets usando su URL o ID
sheet_url = "https://docs.google.com/spreadsheets/d/tu-id-de-google-sheets"  # Reemplaza con la URL o ID del Google Sheets
spreadsheet = client.open_by_url(sheet_url)

# Obtiene el nombre de todas las hojas
sheet_names = [sheet.title for sheet in spreadsheet.worksheets()]

# Imprime los nombres de las hojas
for name in sheet_names:
    print(name)
