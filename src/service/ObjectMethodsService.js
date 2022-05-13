class ObjectMethodsService {
	getEnhancedObject(rawObject) {
		// TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
		const newRawObject = {
			...rawObject,
			valueOf() {
				return rawObject.age;
			},
		};
		return newRawObject;
	}

	getEnhancedObject2(rawObject) {
		// TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
		const newRawObject = {
			...rawObject,
			toString() {
				return `[name="${rawObject.name}",age=${rawObject.age}]`;
			},
		};

		return newRawObject;
	}

	getEnhancedObjectWithoutValueOfOrToString(rawObject) {
		// TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
		// Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.

		const newRawObject = {
			...rawObject,

			[Symbol.toPrimitive](coercionType) {
				const types = {
					string: `[name="${rawObject.name}",age=${rawObject.age}]`,
					number: rawObject.age,
				};
				return types[coercionType];
			},
		};
		return newRawObject;
	}
}

module.exports = ObjectMethodsService;
