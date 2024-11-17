    // main.js
    async function fetchVideoData() {
    try {
        const response = await fetch("videos.json");
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        const videos = await response.json();
        displayVideos(videos);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
    }

    function createVideoItem(video) {
    const videoItem = document.createElement("div");
    videoItem.classList.add("reels");

    videoItem.innerHTML = `
        <video class="video" src="${video.path}"></video>
        <div class="reels-data">
            <div class="vertical">
            <div>
                <i class="bi bi-heart"></i>
                <span>${video.likes}</span>
            </div>
            <div>
                <i class="bi bi-chat"></i>
                <span>${video.comments}</span>
            </div>
            <div>
                <i class="bi bi-send"></i>
                <span>${video.shares}</span>
            </div>
            <div>
                <i class="bi bi-three-dots-vertical"></i>
            </div>
            <div>
                <img src="${video.userAvatar}" alt="user profile">
            </div>
            </div>
            <div class="horizontal">
            <div class="username">
                <div class="imgBox">
                <img src="${video.userAvatar}" alt="user profile">
                </div>
                <span>${video.username}</span>
                <button class="btn">Follow</button>
            </div>
            <div class="caption">${video.caption}</div>
            <div class="audio">
                <span>${video.username}</span>
                <i class="bi bi-dot"></i>
                <span>Original audio</span>
            </div>
            </div>
        </div>`;

    // Add event listeners for mouse enter and leave
    const videoElement = videoItem.querySelector(".video");

    videoItem.addEventListener("mouseenter", () => videoElement.play());
    videoItem.addEventListener("mouseleave", () => videoElement.pause());

    return videoItem;
    }

    function displayVideos(videos) {
    const videoList = document.querySelector(".reels-section");
    const fragment = document.createDocumentFragment();

    videos.forEach((video) => {
        const videoItem = createVideoItem(video);
        fragment.appendChild(videoItem);
    });

    videoList.appendChild(fragment);
    }

    // Call the function to fetch and display video data
    fetchVideoData();
