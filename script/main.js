document.addEventListener('DOMContentLoaded', () => {
    const luasBtn = document.getElementById('luasBtn');
    const kelilingBtn = document.getElementById('kelilingBtn');
    const hitungBtn = document.getElementById('hitungBtn');
    const resetBtn = document.getElementById('resetBtn');
    const hitungKelilingBtn = document.getElementById('hitungKelilingBtn');
    const resetKelilingBtn = document.getElementById('resetKelilingBtn');
    const hasilLuas = document.getElementById('hasilLuas');
    const hasilKeliling = document.getElementById('hasilKeliling');
    const luasSection = document.querySelector('.luas');
    const kelilingSection = document.querySelector('.keliling');


    luasBtn.addEventListener('click', () => {
        luasBtn.classList.add('active');
        kelilingBtn.classList.remove('active');
        luasSection.style.display = 'block';
        kelilingSection.style.display = 'none';
    });

    
    kelilingBtn.addEventListener('click', () => {
        kelilingBtn.classList.add('active');
        luasBtn.classList.remove('active');
        kelilingSection.style.display = 'block';
        luasSection.style.display = 'none';
    });

    
    hitungBtn.addEventListener('click', () => {
        const alas = document.getElementById('alas').value;
        const tinggi = document.getElementById('tinggi').value;

        // Validasi input
        if (alas && tinggi && alas > 0 && tinggi > 0) {
            const luas = 0.5 * alas * tinggi;


            hasilLuas.innerHTML = `
              <h4>Hasil Perhitungan</h4>
              <p>L : 1/2 x a x t</p>
              <p>Luas: 1/2 x ${alas} x ${tinggi}</p>
              <p>L: ${luas}</p>
            `;
        } else {
            hasilLuas.innerHTML = `<p>Harap masukkan nilai alas dan tinggi yang valid!</p>`;
        }
    });


    resetBtn.addEventListener('click', () => {
        document.getElementById('alas').value = '';
        document.getElementById('tinggi').value = '';
        hasilLuas.innerHTML = ''; 
    });

    
    hitungKelilingBtn.addEventListener('click', () => {
        const sisiA = document.getElementById('sisiA').value;
        const sisiB = document.getElementById('sisiB').value;
        const sisiC = document.getElementById('sisiC').value;

        // Validasi input
        if (sisiA && sisiB && sisiC && sisiA > 0 && sisiB > 0 && sisiC > 0) {
            const keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);

    
            hasilKeliling.innerHTML = `
              <h4>Hasil Perhitungan</h4>
              <p>K : a + b + c</p>
              <p>Keliling: ${sisiA} + ${sisiB} + ${sisiC}</p>
              <p>K: ${keliling}</p>
            `;
        } else {
            hasilKeliling.innerHTML = `<p>Harap masukkan nilai sisi-sisi yang valid!</p>`;
        }
    });


    resetKelilingBtn.addEventListener('click', () => {
        document.getElementById('sisiA').value = '';
        document.getElementById('sisiB').value = '';
        document.getElementById('sisiC').value = '';
        hasilKeliling.innerHTML = '';
    });
});
