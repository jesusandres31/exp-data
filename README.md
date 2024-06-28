## create venv

```sh
python -m venv venv
```

## work with venv

- activate:

```sh
# unix
source venv/bin/activate

# windows
venv\Scripts\activate
```

- deactivate:

```sh
deactivate
```

## Requirements

```sh
pip freeze > requirements.txt
pip install -r requirements.txt
```

## exec

```sh
python main.py
```
