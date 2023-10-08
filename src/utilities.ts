export function persianNumber(n: number | string): string {
	let result = n.toString();
	const farsiNum = "۰۱۲۳۴۵۶۷۸۹";

	for (let i = 0; i < 10; i++) {
		const regex = new RegExp(i.toString(), "g");
		result = result.replace(regex, farsiNum.charAt(i));
	}

	return result;
}

export function formatMoney(amount: number, currency: string): string {
	if (currency === "IRT") {
		return persianNumber(amount.toLocaleString()) + " تومان";
	}
	return amount.toLocaleString() + " " + currency;
}

export function nameValidation(value: string): boolean | string {
	return value ? true : "وارد کردن نام الزامی است."
}
export function lastNameValidation(value: string): boolean | string {
	return value ? true : "وارد کردن نام خانوادگی الزامی است."
}
export function phoneValidation(value: string): boolean | string {
	if (!value) {
		return "وارد کردن شماره تلفن الزامی است."
	} else if (!/^\d{11}$/.test(value)) {
		return "شماره تلفن وارد شده معتبر نمی باشد";
	} else {
		return true;
	}
}
export function passwordVlidation(value: string): boolean | string {
	if (!value) {
		return "وارد کردن رمز عبور الزامی است.";
	} else if (value?.length < 10) {
		return "رمز عبور شما باید بیشتر از 10 کاراکتر باشد.";
	} else {
		return true;
	}
}
export function emailValidation(value: string): boolean | string {
	if (!value) {
		return "وارد کردن  ایمیل الزامی است.";
	} else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
		return "ایمیل وارد شده معتبر نمی باشد";
	} else {
		return true;
	}
}
export function checkboxValidation(value: boolean): boolean | string {
	return value ? true : "برای ثبت نام در سایت باید قوانین را بپذیرید."
}
export function usernameValidation(value: string): boolean | string {
	if (!value) {
		return "وارد کردن ایمیل و یا شماره موبایل الزامی است.";
	} else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) && !/^\d{11}$/.test(value)) {
		return "موبایل و یا ایمیل وارد شده معتبر نمی باشد."
	} else {
		return true;
	}
}