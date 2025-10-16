// وظائف بسيطة مؤقتة — سيتم تطويرها لاحقًا
document.addEventListener('DOMContentLoaded', () => {
  // تحديث السنة تلقائياً في الفوتر
  const year = new Date().getFullYear();
  document.querySelectorAll('#footer span').forEach(el => el.textContent = year);

  // منع الإرسال الفارغ في النماذج
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('تم إرسال البيانات بنجاح (نموذج تجريبي)');
      form.reset();
    });
  });
});