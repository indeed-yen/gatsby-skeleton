FROM python:3.6-stretch

#install packages
COPY ./requirements /requirements
RUN pip install -r /requirements/local.txt -i http://pypi.douban.com/simple --trusted-host pypi.douban.com

# copy start.sh to container
COPY ./compose/local/falcon/start.sh /start.sh
RUN sed -i 's/\r//' /start.sh
RUN chmod +x /start.sh

# add demo app
COPY ./api/app /app
WORKDIR /app