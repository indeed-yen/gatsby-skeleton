#!/usr/bin/env bash
cd backend/app
gunicorn --bind :9000 --reload application:app