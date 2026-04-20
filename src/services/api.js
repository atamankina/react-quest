import { API_BASE_URL } from "../config";

async function handleResponse(response, errorMessage) {
    if (!response.ok) {
        throw new Error(errorMessage)
    }

    return response.json()
}

export async function fetchLessons() {
    const response = await fetch(`${API_BASE_URL}/lessons/`)
    return handleResponse(response, "Lessons konnten nicht geladen werden.")
}

export async function fetchQuizQuestions() {
    const response = await fetch(`${API_BASE_URL}/quiz-questions/`)
    return handleResponse(response, "Quizfragen konnten nicht geladen werden.")
}
