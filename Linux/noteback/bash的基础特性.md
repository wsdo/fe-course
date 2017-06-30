	bash的基础特性：

		命令补全：
			shell程序在接收到用户执行命令的请求，分析完成之后，最左侧的字符串会被当作命令；
			命令查找机制：
				查找内部命令；
				根据PATH环境变量中设定的目录，自左而右逐个搜索目录下的文件名；

			给定的打头字符串如果能惟一标识某命令程序文件，则直接补全；
			                    不能惟一标识某命令程序文件，再击tab键一次，会给出列表；

		路径补全：
			在给定的起始路径下，以对应路径下的打头字串来逐一匹配起始路径下的每个文件：
				tab：
					如果能惟一标识，则直接补全；
					否则，再一次tab，给出列表；

	目录管理类的命令：
		mkdir, rmdir

		mkdir：make directories

			mkdir [OPTION]... DIRECTORY...
				-p: 自动按需创建父目录；
				-v: verbose，显示详细过程；
				-m MODE：直接给定权限；

				注意：路径基名方为命令的作用对象；基名之前的路径必须得存在；

		rmdir：remove empty directories

			rmdir [OPTION]... DIRECTORY...

				-p：删除某目录后，如果其父目录为空，则一并删除之；
				-v: 显示过程；

		问题1：如何创建/tmp/x/y1, /tmp/x/y2, /tmp/x/y1/a, /tmp/x/y1/b？
		问题2：如何创建a_c, a_d, b_c, b_d；

	bash的基础特性之：命令行展开
		~：自动展开为用户的家目录，或指定的用户的家目录；			
		{}：可承载一个以逗号分隔的路径列表，并能够将其展开为多个路径；
			例如：/tmp/{a,b} 相当于 /tmp/a /tmp/b

		问题1：mkdir -pv /tmp/x/{y1/{a,b},y2}
		问题2：mkdir -v {a,b}_{c,d}

		问题3：创建如下目录结构：
			/tmp/mysysroot/
				|-- bin
				|-- etc
				|   `-- sysconfig
				|       `-- network-scripts
				|-- sbin
				|-- usr
				|   |-- bin
				|   |-- lib
				|   |-- lib64
				|   |-- local
				|   |   |-- bin
				|   |   |-- etc
				|   |   |-- lib
				|   |   `-- sbin
				|   `-- sbin
				`-- var
				    |-- cache
				    |-- log
				    `-- run

			~]# mkdir -pv /tmp/mysysroot/{bin,sbin,etc/sysconfig/network-scripts,usr/{bin,sbin,local/{bin,sbin,etc,lib},lib,lib64},var/{cache,log,run}}


mkdir -pv ./mysysroot/{bin,sbin,etc/sysconfig/network-scripts,usr/{bin,sbin,local/{bin,sbin,etc,lib},lib,lib64},var/{cache,log,run}}


	tree命令：
		tree [options] [directory]
			-L level：指定要显示的层级；

	bash的基础特性：命令的执行状态结果

		命令执行的状态结果：
			bash通过状态返回值来输出此结果：
				成功：0
				失败：1-255

			命令执行完成之后，其状态返回值保存于bash的特殊变量$?中；

		命令正常执行时，有的还回有命令返回值：
			根据命令及其功能不同，结果各不相同；

		引用命令的执行结果：
			$(COMMAND)
			或`COMMAND`

	bash的基于特性：引用
		强引用：''
		弱引用：""
		命令引用：``

	bash基础特性：快捷键
		Ctrl+a：跳转至命令行行首
		Ctrl+e：跳转至命令行行尾

		Ctrl+u：删除行首至光标所在处之间的所有字符；
		Ctrl+k：删除光标所在处至行尾的所有字符；

		Ctrl+l：清屏，相当于clear

	文件查看类命令：cat, tac, head, tail, more, less

		分屏查看命令：more和less

		more命令：
			more FILE
				特点：翻屏至文件尾部后自动退出；

		less命令：
			less FILE

		head命令：
			查看文件的前n行；
				head [options] FILE
					-n #
					-#

		tail命令：
			查看文件的后n行；
				tail [options] FILE
					-n #
					-#
					-f：查看文件尾部内容结束后不退出，跟随显示新增的行；

		stat命令：
			stat - display file or file system status

			stat FILE...

			文件：两类数据
				元数据：metadata
				数据: data

			时间戳：
				access time：2015-12-10 16:12:22.776423693 +0800
				modify time：2015-12-10 16:12:22.776423693 +0800
				change time：2015-12-10 16:12:22.776423693 +0800

		touch命令：
			touch - change file timestamps

			touch [OPTION]... FILE...
				-c: 指定的文件路径不存在时不予创建；
				-a: 仅修改access time；
				-m：仅修改modify time；
				-t STAMP
					[[CC]YY]MMDDhhmm[.ss]

	文件管理工具：cp, mv, rm

		cp命令：copy
			源文件；目标文件；

	       单源复制：cp [OPTION]... [-T] SOURCE DEST
	       多源复制：cp [OPTION]... SOURCE... DIRECTORY
	       			 cp [OPTION]... -t DIRECTORY SOURCE...

	       	单源复制：cp [OPTION]... [-T] SOURCE DEST
	       		如果DEST不存在：则事先创建此文件，并复制源文件的数据流至DEST中；
	       		如果DEST存在：
	       			如果DEST是非目录文件：则覆盖目标文件；
	       			如果DEST是目录文件：则先在DEST目录下创建一个与源文件同名的文件，并复制其数据流；

	       	多源复制：cp [OPTION]... SOURCE... DIRECTORY
	       			  cp [OPTION]... -t DIRECTORY SOURCE...

	       		如果DEST不存在：错误；
	       		如果DEST存在：
	       			如果DEST是非目录文件：错误；
	       			如果DEST是目录文件：分别复制每个文件至目标目录中，并保持原名；

	       	常用选项：
	       		-i：交互式复制，即覆盖之前提醒用户确认；
	       		-f：强制覆盖目标文件；
	       		-r, -R：递归复制目录；
	       		-d：复制符号链接文件本身，而非其指向的源文件；
	       		-a：-dR --preserve=all, archive，用于实现归档；
	       		--preserv=
	       			mode：权限
	       			ownership：属主和属组
	       			timestamps: 时间戳
	       			context：安全标签
	       			xattr：扩展属性
	       			links：符号链接
	       			all：上述所有属性

	    mv命令：move
	       mv [OPTION]... [-T] SOURCE DEST
	       mv [OPTION]... SOURCE... DIRECTORY
	       mv [OPTION]... -t DIRECTORY SOURCE..	    	

	       常用选项：
	       		-i：交互式；
	       		-f：force

	    rm命令：remove
	    	rm [OPTION]... FILE...

	    	常用选项：
	    		-i：interactive
	    		-f：force
	    		-r: recursive

	    		删除目录：rm -rf /PATH/TO/DIR
	    			危险操作：rm -rf /*

	    	注意：所有不用的文件建议不要直接删除，而是移动至某个专用目录；（模拟回收站）

	变量：
		命名的内存空间；
			变量类型：
				字符型：
				数值型
					精确数值：
					近似数值：

				存储格式、数据范围、参与运算；

				课外作业：浮点数据如何存储？单精度，双精度？

		变量的赋值操作：
			name=tom

回顾：
	bash基础特性：命令补全、路径补全、命令引用
	文件或目录的复制、移动、删除
	变量：变量类型
		存储格式、数据范围、参与运算
