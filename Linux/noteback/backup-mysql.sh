时间的格式是

分　时　日　月　周

上面的例子是指定每天3点备份一次数据库
0 3 * * * /var/backup/backup-mysql.sh
mysqldump -uroot -pWSD312wsd blog > /var/backup/mysql/database－`date +%Y%m%d`.sql


BLOG_FILE_NAME = blog-`data + %Y%m%d`;
cd /var/backup/mysql/
mysqldump -uroot -proot blog>${BLOG_FILE_NAME}.sql
tar -zcvf ${BLOG_FILE_NAME}.sql.tar.gz ${BLOG_FILE_NAME}.sql
rm -rf ${BLOG_FILE_NAME}.sql


代码：
#!/bin/bash
# Name:bakmysql.sh
# This is a ShellScript For Auto DB Backup and Delete old Backup
#
backupdir=/bak/mysqlbak
time=` date +%Y%m%d%H `
mysql_bin_dir/mysqldump -u user -ppassword dataname1 | gzip > $backupdir/name1$time.sql.gz
mysql_bin_dir/mysqldump -u user -ppassword dataname2 | gzip > $backupdir/name2$time.sql.gz
#
find $backupdir -name "name_*.sql.gz" -type f -mtime +5 -exec rm {} \; > /dev/null 2>&1
