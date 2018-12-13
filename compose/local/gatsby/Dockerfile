FROM kkarczmarczyk/node-yarn

EXPOSE 8000

RUN yarn install --ignore-engines

RUN mkdir -p /site
COPY ./site /site
WORKDIR /site
VOLUME /site

COPY ./compose/local/gatsby/start.sh /start.sh
RUN sed -i 's/\r//' /start.sh
RUN chmod +x /start.sh
