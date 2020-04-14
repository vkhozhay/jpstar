<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$consultation_name = $_POST['consultation__name'];
$consultation_phone = $_POST['consultation__phone'];
$consultation_car_info = $_POST['consultation__discription'];

$calculate_name = $_POST['calculate__name'];
$calculate_phone = $_POST['calculate__phone'];
$calculate_car = $_POST['calculate__car'];
$calculate_model = $_POST['calculate__model'];
$calculate_year_from = $_POST['calculate__year-from'];
$calculate_year_to = $_POST['calculate__year-to'];
$calculate_method = $_POST['calculate__form-method'];

$question_name = $_POST['question__name'];
$question_phone = $_POST['question__phone'];
$question_text = $_POST['question__discription'];


$callback_name = $_POST['callback__name'];
$callback_phone = $_POST['callback__phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'php.mailer.bot'; // Логин на почте
    $mail->Password   = 'phpmailer001'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('php.mailer.bot@gmail.com', 'php mailer'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('jpnstar@yandex.ru');  
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен


        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
if (isset($consultation_phone)) {
    $mail->Subject = 'Заявка (консультация)';
    $mail->Body    = "<b>Имя:</b> $consultation_name <br>
    <b>Телефон:</b> $consultation_phone<br>
    <b>Информация об автомобиле:</b> $consultation_car_info<br>";

} 
if (isset($calculate_phone)) {
    $mail->Subject = 'Заявка (расчет стоимости)';
    $mail->Body    = "<b>Имя:</b> $calculate_name <br>
    <b>Телефон:</b> $calculate_phone<br>
    <b>Марка автомобиля:</b> $calculate_car<br>
    <b>Модель:</b> $calculate_model<br>
    <b>Года:</b> $calculate_year_from - $calculate_year_to<br>
    <b>Способ ввоза:</b> $calculate_method<br>";
}

if (isset($question_phone)) {
    $mail->Subject = 'Заявка (вопрос)';
    $mail->Body    = "<b>Имя:</b> $question_name <br>
    <b>Телефон:</b> $question_phone<br>
    <b>Вопрос:</b> $question_text<br>";
}

if (isset($callback_phone)) {
    $mail->Subject = 'Заявка (перезвонить)';
    $mail->Body    = "<b>Имя:</b> $callback_name <br>
    <b>Телефон:</b> $callback_phone<br>";
}

        


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

?>