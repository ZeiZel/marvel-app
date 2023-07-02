import { useState, useCallback } from 'react';

export const useHttp = () => {
	// Эти две строки больше НЕ НУЖНЫ, так как мы больше не используем данные состояния, а перекладываем всю ответственность на состояние process
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	// тут будет находиться состояние процесса
	// начальное - ожидание
	const [process, setProcess] = useState('waiting');

	const request = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' },
		) => {
			// тут происходит загрузка
			setProcess('loading');

			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();

				return data;
			} catch (e) {
				// так же состояние может принять в себя ошибку
				setProcess('error');
				throw e;
			}
		},
		[],
	);

	const clearError = useCallback(() => {
		// тут так же будет стоять ожидание
		setProcess('waiting');
	}, []);

	return { request, clearError, process, setProcess };
};
