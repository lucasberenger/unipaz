FROM python:3.8.1-slim-buster

RUN adduser admin

EXPOSE 8000

RUN pip install "gunicorn==20.0.2"

COPY requirements.txt /
RUN pip install -r /requirements.txt

WORKDIR /app

COPY . /app

RUN python manage.py collectstatic --noinput --clear

CMD python manage.py migrate --noinput; gunicorn unipaz.wsgi:application