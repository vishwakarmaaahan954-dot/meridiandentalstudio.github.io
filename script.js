
// Load animes from localStorage
        function loadAnimes() {
            const saved = localStorage.getItem('yourListAnimes');
            return saved ? JSON.parse(saved) : [];
        }

        // Save animes to localStorage
        function saveAnimes(animes) {
            localStorage.setItem('yourListAnimes', JSON.stringify(animes));
        }

        // Render anime list
        function renderAnimes() {
            const animes = loadAnimes();
            const animeList = document.getElementById('animeList');
            const emptyState = document.getElementById('emptyState');
            const totalAnimes = document.getElementById('totalAnimes');

            animeList.innerHTML = '';
            totalAnimes.textContent = animes.length;

            if (animes.length === 0) {
                emptyState.style.display = 'block';
                return;
            }

            emptyState.style.display = 'none';

            animes.forEach((anime, index) => {
                const li = document.createElement('li');
                li.className = 'anime-item';
                li.draggable = true;
                li.dataset.index = index;

                li.innerHTML = `
                    <div class="anime-rank">
                        <div class="rank-number">#${index + 1}</div>
                        <div class="anime-info">
                            <h3>${anime.title}</h3>
                            <p>${anime.genre || 'No genre specified'}</p>
                            ${anime.notes ? `<p style="margin-top: 5px; font-style: italic; color: #888;">"${anime.notes}"</p>` : ''}
                        </div>
                    </div>
                    <div class="anime-actions">
                        <button class="btn-small" onclick="editAnime(${index})">Edit</button>
                        <button class="btn-small" style="background: #e74c3c;" onclick="deleteAnime(${index})">Delete</button>
                    </div>
                `;

                // Drag and drop events
                li.addEventListener('dragstart', handleDragStart);
                li.addEventListener('dragend', handleDragEnd);
                li.addEventListener('dragover', handleDragOver);
                li.addEventListener('drop', handleDrop);

                animeList.appendChild(li);
            });
        }

        // Drag and drop handlers
        let draggedIndex = null;

        function handleDragStart(e) {
            draggedIndex = parseInt(e.currentTarget.dataset.index);
            e.currentTarget.classList.add('dragging');
        }

        function handleDragEnd(e) {
            e.currentTarget.classList.remove('dragging');
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.currentTarget.style.opacity = '0.7';
        }

        function handleDrop(e) {
            e.preventDefault();
            e.currentTarget.style.opacity = '1';
            
            const dropIndex = parseInt(e.currentTarget.dataset.index);
            if (draggedIndex !== null && draggedIndex !== dropIndex) {
                const animes = loadAnimes();
                const draggedAnime = animes.splice(draggedIndex, 1)[0];
                animes.splice(dropIndex, 0, draggedAnime);
                saveAnimes(animes);
                renderAnimes();
            }
        }

        // Add anime
        function addAnime() {
            const title = document.getElementById('animeTitle').value.trim();
            const genre = document.getElementById('animeGenre').value.trim();
            const notes = document.getElementById('animeNotes').value.trim();

            if (!title) {
                alert('Please enter an anime title');
                return;
            }

            const animes = loadAnimes();
            animes.push({ title, genre, notes });
            saveAnimes(animes);

            // Clear form
            document.getElementById('animeTitle').value = '';
            document.getElementById('animeGenre').value = '';
            document.getElementById('animeNotes').value = '';

            renderAnimes();
        }

        // Delete anime
        function deleteAnime(index) {
            if (confirm('Are you sure you want to delete this anime?')) {
                const animes = loadAnimes();
                animes.splice(index, 1);
                saveAnimes(animes);
                renderAnimes();
            }
        }

        // Edit anime
        function editAnime(index) {
            const animes = loadAnimes();
            const anime = animes[index];
            
            const title = prompt('Edit title:', anime.title);
            if (title === null) return;
            
            anime.title = title || anime.title;
            
            const genre = prompt('Edit genre:', anime.genre);
            if (genre !== null) anime.genre = genre;
            
            const notes = prompt('Edit notes:', anime.notes);
            if (notes !== null) anime.notes = notes;
            
            saveAnimes(animes);
            renderAnimes();
        }

        // Logout
        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logged out! Redirecting to login...');
                window.location.href = 'Login.html';
            }
        }

        // Allow Enter key to add anime
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('animeNotes').addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && e.ctrlKey) {
                    addAnime();
                }
            });

            renderAnimes();
        });