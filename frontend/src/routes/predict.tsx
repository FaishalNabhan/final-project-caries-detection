import { createFileRoute } from '@tanstack/react-router';
import Predict from '../components/pages/Predict';

export const Route = createFileRoute('/predict')({
    component: Predict,
});