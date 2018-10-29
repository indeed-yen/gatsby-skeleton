#!/usr/bin/env bash
cd backend/app
gunicorn -b :9000 things:app