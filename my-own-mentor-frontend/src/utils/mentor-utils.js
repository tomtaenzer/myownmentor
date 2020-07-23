export async function fetchAllMentorCards() {
    const response = await fetch("/api/mentorCards", {
    });
    if (response.status !== 200) {
        throw new Error("Fetch of daily match failed")
    }
    return await response.json();
}


