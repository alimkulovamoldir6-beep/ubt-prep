// Үлгі сұрақтар. Өз пәніңізге арналған тапсырмаларды осы массивте ауыстырыңыз.
const QUESTIONS = [
  { text: 'Ақпараттың ең кіші өлшем бірлігі қайсы?', options: ['Байт', 'Бит', 'Килобайт', 'Мегабайт'], answer: 1, explanation: 'Бит — ақпараттың ең кіші өлшем бірлігі.' },
  { text: '1 байтта неше бит бар?', options: ['4 бит', '8 бит', '16 бит', '1024 бит'], answer: 1, explanation: '1 байт 8 биттен тұрады.' },
  { text: 'Python тілінде экранға мәтін шығаратын команда?', options: ['input()', 'print()', 'write()', 'show()'], answer: 1, explanation: 'print() функциясы деректерді экранға шығарады.' },
  { text: 'Алгоритмнің бірінен кейін бірі орындалатын құрылымы қалай аталады?', options: ['Тармақталу', 'Қайталау', 'Сызықтық', 'Циклдік'], answer: 2, explanation: 'Сызықтық алгоритм командалары ретімен бір рет орындалады.' },
  { text: 'Python-да бүтін санға арналған деректер типі?', options: ['str', 'float', 'int', 'bool'], answer: 2, explanation: 'int типі бүтін сандарды сақтайды.' },
  { text: 'Екілік санау жүйесінде қандай цифрлар қолданылады?', options: ['0 және 1', '1 және 2', '0–7', '0–9'], answer: 0, explanation: 'Екілік санау жүйесінің негізі 2, сондықтан 0 және 1 цифрлары қолданылады.' },
  { text: 'Электрондық кестедегі ұяшық адресі неден құралады?', options: ['Жол атауы мен бет нөмірінен', 'Баған әрпі мен жол нөмірінен', 'Тек баған әрпінен', 'Файл атауы мен кеңейтімінен'], answer: 1, explanation: 'Мысалы, A1 адресінде A — баған, 1 — жол.' },
  { text: 'Интернеттегі веб-бетті ашуға арналған бағдарлама?', options: ['Компилятор', 'Браузер', 'Архиватор', 'Драйвер'], answer: 1, explanation: 'Веб-беттерді қарауға браузер қолданылады.' },
  { text: 'Python тілінде шартты тексеру үшін қай түйінді сөз қолданылады?', options: ['for', 'if', 'def', 'print'], answer: 1, explanation: 'if түйінді сөзі шарт ақиқат болғанда командаларды орындауға мүмкіндік береді.' },
  { text: 'Python-дағы list қандай деректер құрылымы?', options: ['Өзгермейтін тізбек', 'Реттелген өзгермелі тізім', 'Тек бір сан сақтайтын тип', 'Логикалық мән'], answer: 1, explanation: 'list бірнеше элементті ретімен сақтайды және оны өзгертуге болады.' },
  { text: 'Электрондық кесте файлының кең тараған кеңейтімі қайсы?', options: ['.pptx', '.xlsx', '.mp3', '.html'], answer: 1, explanation: '.xlsx — электрондық кестеге арналған кеңейтім.' },
  { text: 'Қай құпиясөз қауіпсіздеу?', options: ['12345678', 'qwerty', 'Aq!7mP2z#L', 'туған жыл'], answer: 2, explanation: 'Әріп, сан және арнайы таңбалары аралас ұзын құпиясөз қауіпсіздеу.' },
  { text: 'Деректер қорындағы кестенің бір жолы көбіне нені білдіреді?', options: ['Жазбаны', 'Өрісті', 'Формуланы', 'Файл кеңейтімін'], answer: 0, explanation: 'Кестедегі жол бір объектіге қатысты жазбаны көрсетеді.' },
  { text: 'Бір әрекетті бірнеше рет қайталап орындайтын алгоритм құрылымы?', options: ['Сызықтық', 'Тармақталу', 'Қайталау циклі', 'Массив'], answer: 2, explanation: 'Қайталау циклі командаларды бірнеше рет орындайды.' },
  { text: 'Python-да санды дәрежеге шығару операторы қайсы?', options: ['//', '**', '%%', '!='], answer: 1, explanation: '** операторы дәрежеге шығару үшін қолданылады, мысалы 2**3 = 8.' }
];

// Google Apps Script Web App сілтемесін тырнақша ішіне қойыңыз. Бапталмаса, сайт жауаптарды кестеге жібермейді.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjf3YQZKInK4iXIGwNu0YBf8q5UrCsS0GgZFCSU4phKH71pPaY44_cF8Yo7GCppw3dcA/exec';

const questionHost = document.getElementById('questions');
const progressLabel = document.getElementById('progress-label');
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('form-message');
const submitButton = document.getElementById('submit-button');
let sent = false;

document.getElementById('question-count').textContent = QUESTIONS.length;
progressLabel.textContent = `0 / ${QUESTIONS.length} жауап`;

questionHost.innerHTML = QUESTIONS.map((q, i) => `
  <article class="question" data-question="${i}">
    <div class="question-head"><span class="question-number">${String(i + 1).padStart(2, '0')}</span><div class="question-text">${escapeHTML(q.text)}</div></div>
    <div class="options">${q.options.map((option, j) => `
      <label class="option"><input type="radio" name="q${i}" value="${j}"><span>${escapeHTML(option)}</span></label>
    `).join('')}</div>
  </article>
`).join('');

questionHost.addEventListener('change', updateProgress);
submitButton.addEventListener('click', submitQuiz);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function getAnswers() {
  return QUESTIONS.map((_, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
}

function updateProgress() {
  const count = getAnswers().filter(value => value !== null).length;
  progressLabel.textContent = `${count} / ${QUESTIONS.length} жауап`;
  progressBar.style.width = `${count / QUESTIONS.length * 100}%`;
  if (count === QUESTIONS.length) message.textContent = 'Барлық сұраққа жауап берілді. Нәтижені жіберуге болады.';
}

async function submitQuiz() {
  if (sent) return;
  const name = document.getElementById('student-name').value.trim();
  const studentClass = document.getElementById('student-class').value.trim();
  const school = document.getElementById('student-school').value.trim();
  const answers = getAnswers();
  message.className = 'form-message';
  if (document.getElementById('website').value) return;
  if (!name || !studentClass) return showError('Аты-жөніңіз бен сыныбыңызды толтырыңыз.');
  if (answers.some(value => value === null)) return showError('Жібермес бұрын барлық сұраққа жауап беріңіз.');

  const score = answers.reduce((sum, answer, i) => sum + (answer === QUESTIONS[i].answer ? 1 : 0), 0);
  revealAnswers(answers);
  showResult(name, score);

  const payload = {
    studentName: name,
    studentClass,
    school,
    subject: 'Информатика',
    score,
    total: QUESTIONS.length,
    percent: Math.round(score / QUESTIONS.length * 100),
    submittedAt: new Date().toISOString(),
    answers: answers.map((answer, i) => ({
      question: QUESTIONS[i].text,
      chosen: QUESTIONS[i].options[answer],
      correct: QUESTIONS[i].options[QUESTIONS[i].answer],
      isCorrect: answer === QUESTIONS[i].answer
    }))
  };

  if (!GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/macros/s/')) {
    message.className = 'form-message error';
    message.textContent = 'Нәтиже есептелді. Google кестеге жіберу үшін README нұсқаулығындағы URL баптауын аяқтаңыз.';
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Жіберілуде…';
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST', mode: 'no-cors',
      headers: {'Content-Type': 'text/plain;charset=utf-8'},
      body: JSON.stringify(payload)
    });
    sent = true;
    submitButton.textContent = 'Жауап жіберілді ✓';
    message.className = 'form-message success';
    message.textContent = 'Жауабыңыз кестеге жіберілді. Нәтижеңіз төменде көрсетілген.';
  } catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = 'Қайта жіберу →';
    message.className = 'form-message error';
    message.textContent = 'Жіберу мүмкін болмады. Интернетті тексеріп, қайта көріңіз.';
  }
}

function showError(text) {
  message.className = 'form-message error';
  message.textContent = text;
}

function revealAnswers(answers) {
  QUESTIONS.forEach((q, i) => {
    const card = document.querySelector(`[data-question="${i}"]`);
    const isCorrect = answers[i] === q.answer;
    card.classList.add(isCorrect ? 'correct' : 'wrong');
    card.querySelectorAll('.option').forEach((option, j) => {
      if (j === q.answer) option.classList.add('correct-option');
      if (j === answers[i] && !isCorrect) option.classList.add('wrong-option');
      option.querySelector('input').disabled = true;
    });
    const note = document.createElement('p');
    note.className = 'explanation';
    note.textContent = `${isCorrect ? 'Дұрыс жауап.' : `Дұрыс жауап: ${q.options[q.answer]}.`} ${q.explanation}`;
    card.appendChild(note);
  });
  document.getElementById('student-fields').querySelectorAll('input').forEach(input => input.disabled = true);
}

function showResult(name, score) {
  const result = document.getElementById('result');
  result.hidden = false;
  result.innerHTML = `<h2>${escapeHTML(name)}, жарайсың!</h2><div class="result-score">${score} / ${QUESTIONS.length}</div><p>Дұрыс жауап: ${score} · Қате жауап: ${QUESTIONS.length - score} · Нәтиже: ${Math.round(score / QUESTIONS.length * 100)}%</p>`;
  document.getElementById('submit-area').before(result);
}
