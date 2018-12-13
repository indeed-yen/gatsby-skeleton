FROM python:3.6-stretch

#install packages
COPY ./requirements /requirements
RUN pip install -r /requirements/local.txt -i http://pypi.douban.com/simple --trusted-host pypi.douban.com

# add demo app
COPY ./api/app ./
