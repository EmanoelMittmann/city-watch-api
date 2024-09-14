import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

@Injectable()
export class FirebaseApp implements OnApplicationBootstrap {
    private app: firebase.FirebaseApp
    constructor(private readonly config: ConfigService) {}

    onApplicationBootstrap() {
        this.app = firebase.initializeApp({
            apiKey: this.config.get<string>('FIREBASE_API_KEY'),
            authDomain: this.config.get<string>('FIREBASE_AUTH_DOMAIN'),
            projectId: this.config.get<string>('FIREBASE_PROJECT_ID'),
            storageBucket: this.config.get<string>('FIREBASE_STORAGE_BUCKET'),
            messagingSenderId: this.config.get<string>(
                'FIREBASE_MESSAGING_SENDER_ID',
            ),
            appId: this.config.get<string>('FIREBASE_APP_ID'),
            measurementId: this.config.get<string>('FIREBASE_MEASUREMENT_ID'),
        });
    }

    auth(){
        return getAuth(this.app)
    }
}
