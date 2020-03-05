MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("1f50f141-1d4f-4cf4-9b85-efbec4d76617") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "state" : "midtjylland" }, "totalPersons" : 33 }
{ "_id" : { "state" : "nordjylland" }, "totalPersons" : 27 }
{ "_id" : { "state" : "new south wales" }, "totalPersons" : 24 }
{
	"_id" : {
		"state" : "australian capital territory"
	},
	"totalPersons" : 24
}
{ "_id" : { "state" : "syddanmark" }, "totalPersons" : 24 }
{ "_id" : { "state" : "south australia" }, "totalPersons" : 22 }
{ "_id" : { "state" : "hovedstaden" }, "totalPersons" : 21 }
{ "_id" : { "state" : "danmark" }, "totalPersons" : 21 }
{ "_id" : { "state" : "queensland" }, "totalPersons" : 20 }
{ "_id" : { "state" : "overijssel" }, "totalPersons" : 20 }
{ "_id" : { "state" : "sjælland" }, "totalPersons" : 19 }
{ "_id" : { "state" : "nova scotia" }, "totalPersons" : 17 }
{ "_id" : { "state" : "canterbury" }, "totalPersons" : 16 }
{ "_id" : { "state" : "northwest territories" }, "totalPersons" : 16 }
{ "_id" : { "state" : "gelderland" }, "totalPersons" : 16 }
{ "_id" : { "state" : "yukon" }, "totalPersons" : 16 }
{ "_id" : { "state" : "bayern" }, "totalPersons" : 15 }
{ "_id" : { "state" : "northern territory" }, "totalPersons" : 15 }
{ "_id" : { "state" : "tasmania" }, "totalPersons" : 15 }
{ "_id" : { "state" : "noord-brabant" }, "totalPersons" : 14 }
Type "it" for more
bye
// =====================

MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("65964bf1-1e81-411e-b020-a7637dc24c2c") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "state" : "midtjylland" }, "totalPersons" : 33 }
bye
// ===========MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("53fa07be-4d3a-444f-a872-40442e71153f") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{
	"_id" : ObjectId("5e605b77c9e381f2a008670b"),
	"gender" : "male",
	"name" : {
		"title" : "mr",
		"first" : "carl",
		"last" : "jacobs"
	},
	"location" : {
		"street" : "6948 springfield road",
		"city" : "arklow",
		"state" : "wicklow",
		"postcode" : 71309,
		"coordinates" : {
			"latitude" : "-29.6721",
			"longitude" : "-154.6037"
		},
		"timezone" : {
			"offset" : "-11:00",
			"description" : "Midway Island, Samoa"
		}
	},
	"email" : "carl.jacobs@example.com",
	"login" : {
		"uuid" : "4f591981-b214-4430-9902-70bc0faa7e81",
		"username" : "organicladybug144",
		"password" : "hank",
		"salt" : "PC6Ig6sD",
		"md5" : "d94aac977512cb2bb005dfa360b40018",
		"sha1" : "a5ffeb65557693e443e195bdf9c066dca33dc47d",
		"sha256" : "f9aa851b943d9a8a876062e48b91b9af190a37779df009a20bc268c25ce48a7f"
	},
	"dob" : {
		"date" : "1984-09-30T01:20:26Z",
		"age" : 33
	},
	"registered" : {
		"date" : "2008-10-29T02:25:24Z",
		"age" : 9
	},
	"phone" : "031-501-5147",
	"cell" : "081-090-3541",
	"id" : {
		"name" : "PPS",
		"value" : "9806982T"
	},
	"picture" : {
		"large" : "https://randomuser.me/api/portraits/men/44.jpg",
		"medium" : "https://randomuser.me/api/portraits/med/men/44.jpg",
		"thumbnail" : "https://randomuser.me/api/portraits/thumb/men/44.jpg"
	},
	"nat" : "IE"
}
bye
// ============MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("903f524b-3b70-4842-9e09-dae8b8f64e0d") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "gender" : "female" }, "totalPerson" : 1125 }
{ "_id" : { "gender" : "male" }, "totalPerson" : 1079 }
bye
// ===MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("5962ba02-13a2-4c15-8516-62a2ebd28d16") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "gender" : "female" }, "totalPerson" : 1125, "avgAge" : null }
{ "_id" : { "gender" : "male" }, "totalPerson" : 1079, "avgAge" : null }
bye
MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("c0dd8a88-b51e-4ed4-b952-7ccd4ba0f1fa") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "gender" : "female" }, "totalPerson" : 1125, "avgAge" : 61.90577777777778 }
{ "_id" : { "gender" : "male" }, "totalPerson" : 1079, "avgAge" : 62.066728452270624 }
bye
MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("247b9240-d071-4b03-9d01-f84f334d9ad0") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{
	"_id" : {
		"gender" : "female"
	},
	"numPersons" : 1125,
	"avgAge" : 61.90577777777778
}
{
	"_id" : {
		"gender" : "male"
	},
	"numPersons" : 1079,
	"avgAge" : 62.066728452270624
}
bye
// ===MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("adbc3a0c-0ad2-4695-b255-4c1c967d47ea") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "gender" : "female" }, "numPersons" : 1125 }
{ "_id" : { "gender" : "male" }, "numPersons" : 1079 }
bye
// =====================MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("e36aa5f5-fe03-45e2-8e3e-3e7fde6a119f") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{
	"_id" : ObjectId("5e605b77c9e381f2a008670b"),
	"gender" : "male",
	"name" : {
		"title" : "mr",
		"first" : "carl",
		"last" : "jacobs"
	},
	"location" : {
		"street" : "6948 springfield road",
		"city" : "arklow",
		"state" : "wicklow",
		"postcode" : 71309,
		"coordinates" : {
			"latitude" : "-29.6721",
			"longitude" : "-154.6037"
		},
		"timezone" : {
			"offset" : "-11:00",
			"description" : "Midway Island, Samoa"
		}
	},
	"email" : "carl.jacobs@example.com",
	"login" : {
		"uuid" : "4f591981-b214-4430-9902-70bc0faa7e81",
		"username" : "organicladybug144",
		"password" : "hank",
		"salt" : "PC6Ig6sD",
		"md5" : "d94aac977512cb2bb005dfa360b40018",
		"sha1" : "a5ffeb65557693e443e195bdf9c066dca33dc47d",
		"sha256" : "f9aa851b943d9a8a876062e48b91b9af190a37779df009a20bc268c25ce48a7f"
	},
	"dob" : {
		"date" : "1984-09-30T01:20:26Z",
		"age" : 33
	},
	"registered" : {
		"date" : "2008-10-29T02:25:24Z",
		"age" : 9
	},
	"phone" : "031-501-5147",
	"cell" : "081-090-3541",
	"id" : {
		"name" : "PPS",
		"value" : "9806982T"
	},
	"picture" : {
		"large" : "https://randomuser.me/api/portraits/men/44.jpg",
		"medium" : "https://randomuser.me/api/portraits/med/men/44.jpg",
		"thumbnail" : "https://randomuser.me/api/portraits/thumb/men/44.jpg"
	},
	"nat" : "IE"
}
2020-03-05T11:23:08.388+0530 E  QUERY    [js] uncaught exception: Error: command failed: {
	"ok" : 0,
	"errmsg" : "The $avg accumulator is a unary operator",
	"code" : 40237,
	"codeName" : "Location40237"
} : aggregate failed :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
doassert@src/mongo/shell/assert.js:18:14
_assertCommandWorked@src/mongo/shell/assert.js:583:17
assert.commandWorked@src/mongo/shell/assert.js:673:16
DB.prototype._runAggregate@src/mongo/shell/db.js:266:5
DBCollection.prototype.aggregate@src/mongo/shell/collection.js:1012:12
@(shell):1:1
bye
// ==================MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("34970434-465d-40c6-a22f-ec17e4d9b7f8") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
2020-03-05T11:25:01.731+0530 E  QUERY    [js] uncaught exception: Error: command failed: {
	"ok" : 0,
	"errmsg" : "Unrecognized pipeline stage name: 'testKey'",
	"code" : 40324,
	"codeName" : "Location40324"
} : aggregate failed :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
doassert@src/mongo/shell/assert.js:18:14
_assertCommandWorked@src/mongo/shell/assert.js:583:17
assert.commandWorked@src/mongo/shell/assert.js:673:16
DB.prototype._runAggregate@src/mongo/shell/db.js:266:5
DBCollection.prototype.aggregate@src/mongo/shell/collection.js:1012:12
@(shell):1:1
bye
// =======MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("2e297366-33eb-44d5-9fb4-d0b7f27b2303") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "gender" : "female" }, "testKey" : 15 }
{ "_id" : { "gender" : "male" }, "testKey" : 15 }
bye
// ====================MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("0fe05918-a3eb-4ba7-8e8e-605cc7827024") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "acknowledged" : true, "insertedIds" : [ 1, 2, 3 ] }
bye
// =================MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("f5a39347-f60b-4923-bb1b-fe0f06b3a0ac") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
2020-03-05T11:34:46.837+0530 E  QUERY    [js] uncaught exception: BulkWriteError({
	"writeErrors" : [
		{
			"index" : 0,
			"code" : 11000,
			"errmsg" : "E11000 duplicate key error collection: mongo-training.students index: _id_ dup key: { : 1.0 }",
			"op" : {
				"_id" : 1,
				"quizzes" : [
					10,
					6,
					7
				],
				"labs" : [
					5,
					8
				],
				"final" : 80,
				"midterm" : 75
			}
		}
	],
	"writeConcernErrors" : [ ],
	"nInserted" : 0,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
}) :
BulkWriteError({
	"writeErrors" : [
		{
			"index" : 0,
			"code" : 11000,
			"errmsg" : "E11000 duplicate key error collection: mongo-training.students index: _id_ dup key: { : 1.0 }",
			"op" : {
				"_id" : 1,
				"quizzes" : [
					10,
					6,
					7
				],
				"labs" : [
					5,
					8
				],
				"final" : 80,
				"midterm" : 75
			}
		}
	],
	"writeConcernErrors" : [ ],
	"nInserted" : 0,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})
BulkWriteError@src/mongo/shell/bulk_api.js:367:48
BulkWriteResult/this.toError@src/mongo/shell/bulk_api.js:332:24
Bulk/this.execute@src/mongo/shell/bulk_api.js:1186:23
DBCollection.prototype.insertMany@src/mongo/shell/crud_api.js:326:5
@(shell):1:1
bye
// ===================
MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("7239bab2-8e62-409e-aba2-dffad5e7609f") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : 1, "quizAvg" : 7.666666666666667, "labAvg" : 6.5, "examAvg" : 77.5 }
{ "_id" : 2, "quizAvg" : 9.5, "labAvg" : 8, "examAvg" : 87.5 }
{ "_id" : 3, "quizAvg" : 4.666666666666667, "labAvg" : 5.5, "examAvg" : 74 }
bye
// ===========MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("870d98bb-cca9-4544-ae72-39cefe87223b") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "acknowledged" : true, "insertedIds" : [ 1, 2, 3, 4, 5 ] }
bye
// ==============MongoDB shell version v4.2.3
connecting to: mongodb://localhost:27017/mongo-training?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("a23ef6a3-c84e-48de-96f4-8c6cba521a49") }
MongoDB server version: 3.6.3
WARNING: shell and server versions do not match
{ "_id" : { "price" : 20 }, "items" : [ "jkl" ] }
{ "_id" : { "price" : 5 }, "items" : [ "xyz", "xyz" ] }
{ "_id" : { "price" : 10 }, "items" : [ "abc", "abc" ] }
bye
// ===================