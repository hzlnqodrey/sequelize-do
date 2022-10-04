#!/bin/bash

export PROJECT_ID=tedi-backend-web
export REGION=asia-southeast2
export CONNECTION_NAME=tedi-backend-web:asia-southeast2:db-testing-sequelize-backend

gcloud builds submit \
    --tag gcr.io/$PROJECT_ID/db-testing-cloudrun \
    --project $PROJECT_ID

gcloud run deploy db-testing-cloudrun \
    --image gcr.io/$PROJECT_ID/db-testing-cloudrun \
    --platform managed
    --region $REGION \
    --allow-unauthenticated \
    --add-cloudsql-instances $CONNECTION_NAME \
    --project $PROJECT_ID