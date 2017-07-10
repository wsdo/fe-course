angular.module('starkapp')
    .factory('$MemberManage', [
        '$http',
        function(
            $http
        ) {
            return {
                fetchMemberInfo: function() {
                    // 此時的api是從後端過來的
                    return $http.get('/data/member.json').then(function(data) {
                        return data;
                    })
                }

            }
        }
    ])