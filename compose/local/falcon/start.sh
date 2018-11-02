#!/usr/bin/env bash
cd api/app
gunicorn --bind :9000 --reload application:app