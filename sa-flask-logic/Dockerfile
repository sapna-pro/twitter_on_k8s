FROM python:3.9.7
COPY sa-flask-logic/sa /app
WORKDIR /app
RUN pip3 install -r requirements.txt && \
python3 -m textblob.download_corpora
ENTRYPOINT ["python3"]
CMD ["sentiment_analysis.py"]