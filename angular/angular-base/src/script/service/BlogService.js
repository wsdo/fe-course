angular.module('starkapp')
    .factory('$BlogManage', [
        '$http',
        function(
            $http
        ) {
            return {
                fetchPosts: function() {
                    var url = 'http://blog.shudong.wang/wp-json/wp/v2/posts';
                    return $http.get(url).then(function(data) {
                        return data;
                    })
                }

            }
        }
    ])