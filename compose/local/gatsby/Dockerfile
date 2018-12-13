FROM kkarczmarczyk/node-yarn

EXPOSE 8000

RUN yarn install --ignore-engines

RUN mkdir -p /site
COPY ./site /site
WORKDIR /site
VOLUME /site

COPY ./compose/local/gatsby/start.sh /site/start.sh
RUN sed -i 's/\r//' /site/start.sh
RUN chmod +x /site/start.sh
