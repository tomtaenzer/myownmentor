export async function fetchAllMentorCards() {
    const response = await fetch("/api/mentorCards", {
    });
    if (response.status !== 200) {
        throw new Error("Fetch failed")
    }
    return await response.json();
}


