document.addEventListener("DOMContentLoaded", function () {
    var commentForm = document.createElement('form');
    commentForm.classList.add('needs-validation');
    commentForm.setAttribute('id', 'commentForm');

    commentForm.innerHTML = `
        <div class="form-group">
            <label for="name">İsim *</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        <div class="form-group">
            <label for="website">Website</label>
            <input type="url" class="form-control" id="website">
        </div>

        <div class="form-group">
            <label for="message">Mesajınız *</label>
            <textarea id="message" cols="30" rows="5" class="form-control" required></textarea>
        </div>
        <div class="form-group mb-0">
            <button type="submit" class="btn btn-primary font-weight-semi-bold py-2 px-3">Gönder</button>
        </div>
    `;

    document.getElementById('comment').appendChild(commentForm);

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller

        // Form verilerini toplar
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var website = document.getElementById('website').value;
        var message = document.getElementById('message').value;

        // Form verilerini sunucuya göndermek için uygun bir HTTP isteği yapar
        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, website: website, message: message })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Sunucudan gelen yanıtı konsola yazdırır
            // İsteğin başarılı olduğunu kullanıcıya bildirir
            alert('Yorum başarıyla eklendi');
        })
        .catch(error => {
            console.error('Hata:', error); // Hata durumunda konsola hata mesajını yazdırır
            // Kullanıcıya hata durumunu bildirir
            alert('Yorum eklenirken bir hata oluştu');
        });

        // Formu temizler
        commentForm.reset();
    });
});

