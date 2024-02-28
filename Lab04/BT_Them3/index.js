const addZero = (num) => {
  if (Number(num) < 10) {
    num = '0' + num;
  }
  return num;
}

const handleSubmit = (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const sanitizedUsername = usernameValue.length !== 0 ? usernameValue : "Chưa nhập";
  
  const now = new Date();
  const nowMinute = addZero(now.getMinutes());
  const nowHour = addZero(now.getHours());
  const nowTime = [nowHour, nowMinute].join(':');
  const nowDayInWeek = now.getDay();
  const formattedNowDay = nowDayInWeek === 0 ? 'Chủ nhật' : ('Thứ ' + (nowDayInWeek+1));
  const nowDate = addZero(now.getDate());
  const nowMonth = addZero(now.getMonth());
  const nowYear = now.getFullYear();
  const nowFullDate = 'ngày ' + [nowDate, nowMonth, nowYear].join('/');
  const formattedNow = [nowTime, formattedNowDay, nowFullDate].join(' ');


  const commentsContainerHTML = document.querySelector('#comments-container').innerHTML;
  document.querySelector('#comments-container').innerHTML = `
  <div class="comment-container">
  <p class="username">
  @&nbsp;<span>${sanitizedUsername}</span>
  </p>
  <p class="datetime">${formattedNow}</p>
  <p class="contents">${content.value}</p>
  </div>` + commentsContainerHTML;
  username.value = '';
  content.value = '';
}