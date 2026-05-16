// =============================================
// ADDIM 1: HTML elementlərini tapırıq
// =============================================

const nameInput = document.getElementById('Name');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');
const submitBtn = document.getElementById('SubmitBtn');

const nameError = document.getElementById('NameError');
const emailError = document.getElementById('EmailError');
const passwordError = document.getElementById('PasswordError');

const successMessage = document.getElementById('SuccessMessage');
const form = document.getElementById('Form');


// =============================================
// ADDIM 2: Mesaj göstərən köməkçi funksiya
// =============================================
// isValid = true  → yaşıl (uğur)
// isValid = false → qırmızı (xəta)

function showMessage(spanEl, inputEl, isValid, text) {
    spanEl.textContent = text;               // mətni yaz
    spanEl.className = isValid ? 'error-message success' : 'error-message error';
    inputEl.className = isValid ? 'valid' : 'invalid';
}

function clearMessage(spanEl, inputEl) {
    spanEl.textContent = '';                 // mətni sil
    spanEl.className = 'error-message';
    inputEl.className = '';
}


// =============================================
// ADDIM 3: Ad yoxlama funksiyası
// =============================================

function validateName() {
    const val = nameInput.value.trim();      // boşluqları sil

    if (val === '') {
        clearMessage(nameError, nameInput);  // boşdursa heç nə göstərmə
        return false;
    }

    if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇəƏ]+$/.test(val)) {
        showMessage(nameError, nameInput, false, '✗ Yalnız hərf olmalıdır');
        return false;
    }

    if (val.length < 3) {
        showMessage(nameError, nameInput, false, '✗ Minimum 3 hərf olmalıdır');
        return false;
    }

    showMessage(nameError, nameInput, true, '✓ Düzgündür');
    return true;
}


// =============================================
// ADDIM 4: Email yoxlama funksiyası
// =============================================

function validateEmail() {
    const val = emailInput.value.trim();

    if (val === '') {
        clearMessage(emailError, emailInput);
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        showMessage(emailError, emailInput, false, '✗ Düzgün email daxil edin');
        return false;
    }

    showMessage(emailError, emailInput, true, '✓ Düzgündür');
    return true;
}


// =============================================
// ADDIM 5: Şifrə yoxlama funksiyası
// =============================================

function validatePassword() {
    const val = passwordInput.value;         // şifrədə trim() etmirik!

    if (val === '') {
        clearMessage(passwordError, passwordInput);
        return false;
    }

    if (val.length < 6) {
        showMessage(passwordError, passwordInput, false, '✗ Minimum 6 simvol olmalıdır');
        return false;
    }

    if (!/\d/.test(val)) {
        showMessage(passwordError, passwordInput, false, '✗ Ən az 1 rəqəm olmalıdır');
        return false;
    }

    showMessage(passwordError, passwordInput, true, '✓ Düzgündür');
    return true;
}


// =============================================
// ADDIM 6: Hamısını yoxlayıb düyməni idarə et
// =============================================

function checkAll() {
    const nameOk     = validateName();
    const emailOk    = validateEmail();
    const passwordOk = validatePassword();

    // 3-ü də true olsaydı disabled-i götür, olmasa saxla
    submitBtn.disabled = !(nameOk && emailOk && passwordOk);
}


// =============================================
// ADDIM 7: İstifadəçi yazdıqca dinlə (real vaxt)
// =============================================

nameInput.addEventListener('input', checkAll);
emailInput.addEventListener('input', checkAll);
passwordInput.addEventListener('input', checkAll);


// =============================================
// ADDIM 8: Düyməyə basılanda formu gizlət
// =============================================

submitBtn.addEventListener('click', function () {
    form.style.display = 'none';
    successMessage.style.display = 'block';
});